import { Subject } from 'rxjs';
import React from 'react';

const subject = new Subject();

export type ModalContent = {
  children: React.ReactNode;
}

// this can be replaced with Modal from Metro UI, and instead of rxjs we can use the component's state
export const modalService = {
  openModal: (modalContent: ModalContent) => subject.next(modalContent),
  closeModal: () => subject.next(undefined),
  modalSubscribe: () => subject.asObservable()
}
