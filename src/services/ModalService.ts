import { Subject } from 'rxjs';
import React from 'react';

const subject = new Subject();

export type ModalContent = {
  children: React.ReactNode;
}

// this can be replaced with Modal from Metro UI - then rxjs is not needed
export const modalService = {
  openModal: (modalContent: ModalContent) => subject.next(modalContent),
  closeModal: () => subject.next(undefined),
  modalSubscribe: () => subject.asObservable()
}
