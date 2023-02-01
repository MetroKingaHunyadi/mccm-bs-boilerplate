import { Subject } from 'rxjs';
import React from 'react';

const subject = new Subject();

export type ModalContent = {
  children: React.ReactNode;
}

export const modalService = {
  openModal: (modalContent:ModalContent) => subject.next(modalContent),
  closeModal: () => subject.next(undefined),
  modalSubscribe: () => subject.asObservable()
}
