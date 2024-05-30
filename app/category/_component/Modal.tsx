'use client';

import { type ElementRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function Modal({
  children,
  showModal,
  setModal,
}: {
  children: React.ReactNode;
  showModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mounted, setMounted] = useState(showModal);
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  // useEffect(() => {
  //   if (!dialogRef.current?.open) {
  //     dialogRef.current?.showModal();
  //   }
  // }, []);

  useEffect(() => setMounted(showModal), [showModal]);

  function onDismiss() {
    // router.refresh;
    setMounted(false);
    setModal(false);
  }

  // createPortal(
  //   <div className="modal-backdrop">
  //     <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
  //       {children}
  //       <button onClick={onDismiss} className="close-button" />
  //     </dialog>
  //   </div>,
  //   document.getElementById('modal-root')!
  // );

  return mounted
    ? createPortal(
        <div className="modal-backdrop">
          <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
            {children}
            {/* <button onClick={onDismiss} className="close-button" /> */}
          </dialog>
        </div>,
        document.getElementById('modal-root')!
      )
    : null;
  //   return (
  //     <div className="modal-backdrop">
  //       <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
  //         {children}
  //         <button onClick={onDismiss} className="close-button" />
  //       </dialog>
  //     </div>
  //   );
}
