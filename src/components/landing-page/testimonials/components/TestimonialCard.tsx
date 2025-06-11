import Image from 'next/image';
import React from 'react';
import cx from 'classnames';
import styles from './testimonialCard.module.css';

interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  content,
  avatarUrl
}) => {
  return (
    <div className={cx(styles.testimonialCard, 'testimonial-card bg-white p-6 rounded-lg shadow-md')}>
      <div className={styles.testimonialCardContent}>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
            <Image src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" width={48} height={48} />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-gray-600 text-sm">{position}</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <svg className="w-6 h-6 text-gray-300 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a4 4 0 01-4-4V7a4 4 0 014-4h1a4 4 0 014 4v6a4 4 0 01-4 4zm6 0a4 4 0 01-4-4V7a4 4 0 014-4h1a4 4 0 014 4v6a4 4 0 01-4 4z"></path></svg>
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 