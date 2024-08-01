import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  description: string;
  type?: 'rounded' | 'simple';
  size?: 'small' | 'medium' | 'large';
  position?: 'center' | 'left';
  positiveLabel?: string;
  negativeLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  type = 'simple',
  size = 'medium',
  positiveLabel = 'Submit',
  negativeLabel = 'Cancel',
  position = 'left',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleSubmit = () => {
    onSubmit();
    handleCloseModal(); // Close the modal after submission
  };

  const sizeClass = size === 'small' ? 'max-w-sm' : size === 'large' ? 'max-w-3xl' : 'max-w-lg';
  const roundedClass = type === 'rounded' ? 'rounded-md' : 'rounded-lg'; // Less rounded for 'simple'

  const getPosition = (position: string) => {
    switch (position) {
      case 'left':
        return 'justify-start';
      case 'center':
        return 'justify-center';
    }
  };

  return (
    <>
      {!isOpen && !isModalOpen && (
        <button
          className="bg-blue-500 text-white font-bold py-2 px-8 rounded-sm hover:bg-blue-700"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      )}
      {(isOpen || isModalOpen) && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className={`flex items-center ${getPosition(position)} min-h-screen pt-4 px-4 pb-20 text-center`}>
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="inline-block align-middle h-screen" aria-hidden="true">&#8203;</span>
            <div className={`inline-block align-middle bg-white ${roundedClass} shadow-xl transform transition-all ${sizeClass} p-6`}>
              {title && <h3 className="text-lg font-medium text-center text-gray-900 mb-4">{title}</h3>}
              <p className="text-gray-600 mb-4">{description}</p>
              <textarea
                className="w-full mt-4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Input Remark"
              />
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md"
                  onClick={handleCloseModal}
                >
                  {negativeLabel}
                </button>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-4"
                  onClick={handleSubmit}
                >
                  {positiveLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;