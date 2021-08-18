import { toast } from 'react-toastify';

export const toastConfig = toast.configure;

export const displayNotificationSuccess = (text: string) => {
  toast.configure();
  toast.success(text, {
    autoClose: 2000,
    hideProgressBar: true,
  });
};

export const displayNotificationError = (text: string) => {
  toast.configure();
  toast.error(text, {
    autoClose: 3000,
    hideProgressBar: true,
  });
};
