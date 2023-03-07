import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  setModal: Dispatch<SetStateAction<boolean>>;
  id: number;
  title: string;
};

export default function Modal({ setModal, id, title }: Props) {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/70 flex justify-center items-center   cursor-pointer"
      />
      <div className="absolute flex justify-center items-center w-[60vw] h-[70vh] z-999 bg-black rounded-[8px] top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-white">
        <p>{title}</p>
      </div>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 70vh;
  z-index: 999;
  background-color: black;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
