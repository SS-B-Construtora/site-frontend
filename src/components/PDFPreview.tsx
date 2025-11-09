import React, { useState, useEffect } from 'react';

interface PDFPreviewProps {
  file: string;
  width?: number;
  height?: number;
  className?: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ 
  file, 
  width = 120, 
  height = 120, 
  className = "" 
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Criar URL do PDF
        setObjectUrl(file);
        setLoading(false);
      } catch (err) {
        console.error('PDF load error:', err);
        setError('Erro ao carregar PDF');
        setLoading(false);
      }
    };

    loadPDF();
  }, [file]);

  if (loading) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded ${className}`}
        style={{ width, height }}
      >
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error || !objectUrl) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-gray-100 rounded text-xs text-gray-500 ${className} border-2 border-dashed border-gray-300`}
        style={{ width, height }}
      >
        <svg className="w-8 h-8 mb-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
        <span className="text-center">PDF</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded ${className} bg-white border border-gray-200`} style={{ width, height }}>
      <iframe
        src={`${objectUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        width={width}
        height={height}
        className="border-0"
        title="PDF Preview"
        style={{ 
          pointerEvents: 'none',
          transform: 'scale(0.8)',
          transformOrigin: 'top left',
          width: '125%',
          height: '125%'
        }}
      />
    </div>
  );
};

export default PDFPreview;