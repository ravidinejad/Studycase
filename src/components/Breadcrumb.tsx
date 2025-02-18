import React, { FC, HTMLAttributes } from 'react';

interface BreadcrumbItem {
  title?: string;
  description?: string;
  path?: string;
}

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'small' | 'medium' | 'large';
  datas: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ variant, datas, children }) => {
  const getSizeClasses = () => {
    switch (variant) {
      case 'small':
        return 'text-xs';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  return (
    <nav className={`breadcrumb-container flex breadcrumb-${variant}`} aria-label="Breadcrumb">
      <ol className="breadcrumb-list inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <svg className="w-3 h-3 me-2.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        {datas.map((item, index) => (
          <li key={index} className={`inline-flex items-center ${getSizeClasses()}`}>
            {index > 0 && children ? (
              <> {children} </>
            ) : (
              index > 0 ? (
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
              ) : null
            )}
            {item.path && index !== datas.length - 1 ? (
              <div className="flex items-center">
                <a href={item.path} className={`ms-1 font-medium text-blue-600 ${getSizeClasses()}`}>
                  {item.title}
                </a>
              </div>
            ) : (
              <div className="flex items-center">
                <span className={`ms-1 font-medium text-gray-500 ${getSizeClasses()}`}>{item.title}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  variant: 'medium',
};

export default Breadcrumb;
export type { BreadcrumbProps };