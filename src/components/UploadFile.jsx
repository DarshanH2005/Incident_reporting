import React, { useRef } from 'react';
import styles from './UploadFile.module.css';

const UploadFile = ({ 
  onFileSelect = () => {}, 
  accept = '.pdf,application/pdf', 
  maxSize = 4 * 1024 * 1024, // 4MB
  title = "Upload your document",
  format = "PDF format",
  className = ""
}) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > maxSize) {
        alert(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
        return;
      }
      onFileSelect(file);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.label}>Incident Proof Attachments(if any)</div>
      <div className={`${styles.container} ${className}`}>
        <div className={styles.left}>
          <div className={styles.iconWrap} aria-hidden="true">
            <img 
              className={styles.circle} 
              alt="" 
              src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='24'%20cy='24'%20r='24'%20fill='%23F0F2F5'/%3e%3c/svg%3e"
            />
            <div style={{ position: 'absolute' }}>
              <img 
                alt="upload icon" 
                src="data:image/svg+xml,%3csvg%20width='22'%20height='21'%20viewBox='0%200%2022%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5C5%204.46243%207.46243%202%2010.5%202C13.1907%202%2015.432%203.93318%2015.907%206.48668C15.9736%206.84475%2016.2297%207.1383%2016.5754%207.25295C18.5661%207.9132%2020%209.79045%2020%2012C20%2014.7614%2017.7614%2017%2015%2017C14.4477%2017%2014%2017.4477%2014%2018C14%2018.5523%2014.4477%2019%2015%2019C18.866%2019%2022%2015.866%2022%2012C22%209.10754%2020.2462%206.62697%2017.7463%205.55958C16.8909%202.358%2013.9717%200%2010.5%200C6.35786%200%203%203.35786%203%207.5C3%207.60028%203.00197%207.70014%203.00589%207.79955C1.21048%208.8354%200%2010.7754%200%2013C0%2016.3137%202.68629%2019%206%2019C6.55228%2019%207%2018.5523%207%2018C7%2017.4477%206.55228%2017%206%2017C3.79086%2017%202%2015.2091%202%2013C2%2011.3427%203.00818%209.91848%204.44865%209.31168C4.86549%209.13609%205.11256%208.70256%205.05119%208.25443C5.01748%208.00826%205%207.75644%205%207.5Z'%20fill='%23667185'/%3e%3cpath%20d='M10.3356%2012.2526C10.7145%2011.9158%2011.2855%2011.9158%2011.6644%2012.2526L13.1644%2013.5859C13.5771%2013.9528%2013.6143%2014.5849%2013.2474%2014.9977C12.9264%2015.3588%2012.4025%2015.4325%2012%2015.1996V20C12%2020.5523%2011.5523%2021%2011%2021C10.4477%2021%2010%2020.5523%2010%2020V15.1996C9.5975%2015.4325%209.07358%2015.3588%208.75259%2014.9977C8.38567%2014.5849%208.42285%2013.9528%208.83564%2013.5859L10.3356%2012.2526Z'%20fill='%23667185'/%3e%3c/svg%3e"
              />
            </div>
          </div>
          <div className={styles.textBlock}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.meta}>
              <span>{format}</span>
              <span className={styles.dot}></span>
              <span>Max. {Math.round(maxSize / 1024 / 1024)}MB</span>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <button 
            type="button" 
            className={styles.btnLarge} 
            aria-label="Upload with icon"
            onClick={handleButtonClick}
          >
            <img 
              className={styles.iconSmall} 
              alt="icon" 
              src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.75984%202.42002V9.08003C7.75984%209.50003%207.41984%209.84003%206.99984%209.84003C6.57984%209.84003%206.25984%209.50003%206.25984%209.08003V2.42002L3.73984%204.64002C3.43984%204.92002%202.95984%204.90002%202.69984%204.58002C2.41984%204.28002%202.43984%203.80002%202.75984%203.52002L6.49984%200.200017C6.77984%20-0.0599837%207.19984%20-0.0599837%207.49984%200.180017C7.49984%200.200017%207.49984%200.200017%207.49984%200.200017L11.2398%203.52002C11.5598%203.80002%2011.5798%204.28002%2011.3198%204.58002C11.0398%204.90002%2010.5598%204.92002%2010.2598%204.64002L7.75984%202.42002ZM12.1598%2011.08C12.1598%2010.66%2012.4998%2010.34%2012.9198%2010.34C13.3398%2010.34%2013.6598%2010.66%2013.6598%2011.08V12.92C13.6598%2013.32%2013.3398%2013.66%2012.9198%2013.66H1.07984C0.679844%2013.66%200.339844%2013.32%200.339844%2012.92V11.08C0.339844%2010.66%200.679844%2010.34%201.07984%2010.34C1.49984%2010.34%201.83984%2010.66%201.83984%2011.08V12.16H12.1598V11.08Z'%20fill='%2338AEE0'/%3e%3c/svg%3e"
            />
            <span>Upload</span>
          </button>
          <input 
            ref={fileInputRef}
            type="file" 
            style={{ display: 'none' }}
            accept={accept}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
