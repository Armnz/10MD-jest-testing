import { nameValidate } from './utils/nameValidate/nameValidate';
import { eMailValidate } from './utils/eMailValidate/eMailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';

// Function to create and display a toast message
const createToast = (message: string, isSuccess: boolean): void => {
  const toastElement = document.createElement('div');
  toastElement.classList.add('toast', isSuccess ? 'toast-success' : 'toast-error');
  toastElement.textContent = message;
  document.body.appendChild(toastElement);

  // Automatically remove the toast after some time
  setTimeout(() => {
    toastElement.remove();
  }, 3000);
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.user-form') as HTMLFormElement;
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('.name-input') as HTMLInputElement;
    const emailInput = document.querySelector('.email-input') as HTMLInputElement;
    const passwordInput = document.querySelector('.password-input') as HTMLInputElement;

    let isValid = true;

    if (!nameValidate(nameInput.value)) {
      createToast('Invalid name.', false);
      isValid = false;
    }

    if (!eMailValidate(emailInput.value)) {
      createToast('Invalid email.', false);
      isValid = false;
    }

    if (!passwordValidate(passwordInput.value)) {
      createToast('Invalid password.', false);
      isValid = false;
    }

    if (isValid) {
      createToast('Form submitted successfully!', true);
    }
  });
});
