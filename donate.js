// Auto update year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// Modal đăng ký serial
const modalOverlay = document.getElementById('modal-serial');
const btnRegisterSerial = document.getElementById('btn-register-serial');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const serialForm = document.getElementById('serial-form');

function openModal() {
  if (modalOverlay) {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (btnRegisterSerial) {
  btnRegisterSerial.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalCancel) {
  modalCancel.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

if (serialForm) {
  serialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const serialInput = document.getElementById('serial-input');
    const emailInput = document.getElementById('email-input');
    const deviceInput = document.getElementById('device-input');
    
    console.log('Serial:', serialInput?.value);
    console.log('Email:', emailInput?.value);
    console.log('Device:', deviceInput?.value);
    
    alert(i18n.t('modal.serial.register.success'));
    
    serialForm.reset();
    closeModal();
  });
}

