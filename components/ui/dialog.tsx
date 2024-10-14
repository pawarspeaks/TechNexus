import React from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={() => onOpenChange(false)} />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10">
        {children}
      </div>
    </div>
  );
};

export const DialogContent: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={`${className} text-gray-900 dark:text-gray-100`}>{children}</div>;
};

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border-b pb-2 mb-2">{children}</div>;
};

export const DialogTitle: React.FC<{ className?: string }> = ({ className, children }) => {
  return <h2 className={`text-lg font-bold ${className} text-gray-900 dark:text-gray-100`}>{children}</h2>;
};
