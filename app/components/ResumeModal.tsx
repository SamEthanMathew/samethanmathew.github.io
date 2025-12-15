import { useEffect, useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [pdfKey, setPdfKey] = useState<number>(Date.now());

  // Update key when modal opens to force PDF reload
  useEffect(() => {
    if (isOpen) {
      setPdfKey(Date.now());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Use cache-busting query parameter to force reload
  const pdfUrl = `/resume.pdf?t=${pdfKey}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Resume</h2>
          <div className="flex gap-2">
            <a
              href={pdfUrl}
              download="resume.pdf"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Resume Content */}
        <div className="p-4 h-[calc(90vh-80px)] overflow-auto">
          {/* Try object tag first (better PDF support) */}
          <object
            data={pdfUrl}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Resume PDF"
          >
            {/* Fallback to iframe if object doesn't work */}
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Resume"
              key={pdfKey}
            >
              {/* Final fallback if both fail */}
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Your browser doesn't support PDF preview. Please download it instead.
                </p>
                <a
                  href={pdfUrl}
                  download="resume.pdf"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
