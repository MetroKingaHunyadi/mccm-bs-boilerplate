import React, {useEffect, useState} from 'react';
import style from './Modal.module.scss';
import {ModalContent, modalService} from '../../services/ModalService';

export const ModalComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [children, setChildren] = useState<React.ReactNode | undefined>(undefined);

  useEffect(()=>{
    const modalSubscription = modalService.modalSubscribe().subscribe(v => {
      if(v){
        setChildren((v as ModalContent).children)
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    })
    return () => {
      modalSubscription.unsubscribe();
    }
  }, [])

  if(!isOpen) return null;
  return (
    <>
      <div className={`${style.modal} ${isOpen ? style.modalShow : style.modalHide}`}>
        <div className={style.modalOverlay} />
        <div className={style.modelContent}>
          {children}
        </div>
      </div>
    </>
  )
}
