import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Próximamente
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Estamos trabajando en algo increíble. ¡Mantente atento!
          </p>
        </div>
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4"></div>
        </div>
        <p className="text-sm text-gray-500">
          BookFast Marketing
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
