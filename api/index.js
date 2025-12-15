import { createRequestHandler } from "@react-router/node";

let requestHandler;

// Lazy load the build to handle import errors better
async function getRequestHandler() {
  if (!requestHandler) {
    try {
      const build = await import("../build/server/index.js");
      requestHandler = createRequestHandler(build, "production");
    } catch (error) {
      console.error("Failed to import build:", error);
      throw new Error(`Failed to load build: ${error.message}`);
    }
  }
  return requestHandler;
}

export default async function handler(req, res) {
  try {
    const handler = await getRequestHandler();
    
    // Get the full URL
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;
    const url = `${protocol}://${host}${req.url}`;
    
    // Create a Web API Request from Node.js req
    const headers = new Headers();
    Object.keys(req.headers).forEach((key) => {
      const value = req.headers[key];
      if (value) {
        headers.set(key, Array.isArray(value) ? value.join(", ") : value);
      }
    });

    let body = null;
    if (req.method !== "GET" && req.method !== "HEAD") {
      // Read body if present
      if (req.body) {
        body = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
      }
    }

    const request = new Request(url, {
      method: req.method,
      headers: headers,
      body: body,
    });

    const response = await handler(request);
    
    // Convert Web API Response to Node.js res
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    const responseBody = await response.text();
    res.send(responseBody);
  } catch (error) {
    console.error("Error in serverless function:", error);
    console.error("Stack:", error.stack);
    res.status(500).json({ 
      error: "Internal Server Error", 
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined
    });
  }
}


