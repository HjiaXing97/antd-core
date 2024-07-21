import { useRef } from "react";
import { Button } from "antd";

import BaseModal from "./BaseModal";
import type { IModalHandles } from "./BaseModal/shared";

const App = () => {
  const modalRef = useRef<IModalHandles>(null);

  const handleClick = () => {
    modalRef?.current?.openModal();
  };
  return (
    <div>
      <Button onClick={handleClick}>1111</Button>
      <BaseModal title="modal" ref={modalRef}>
        <div>BaseModal</div>
      </BaseModal>
    </div>
  );
};

export default App;
