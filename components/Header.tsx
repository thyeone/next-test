import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header() {
  const router = useRouter();
  return (
    <Nav>
      <Menus>
        <Menu>
          <Link href="/">
            <span className={router.pathname === "/" ? "isActive" : ""}>
              Home
            </span>
          </Link>
        </Menu>
        <Menu>
          <Link href="/about">
            <span className={router.pathname === "/about" ? "isActive" : ""}>
              About
            </span>
          </Link>
        </Menu>
      </Menus>
    </Nav>
  );
}

const Nav = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30%;
  background-color: white;
  color: black;
  padding: 20px 0;
  a {
    cursor: pointer;
  }
  .isActive {
    color: red;
  }
`;

const Menus = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Menu = styled.li`
  font-size: 21px;
`;
