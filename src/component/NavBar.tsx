import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
type Props = {};

export default function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link href="/" className="navbar__logo">
          NextMap
        </Link>
        <div className="navbar__list">
          <Link href="/stores" className="navbar__list--item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar__list--item">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar__list--item">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar__list--item">
            로그인
          </Link>
        </div>

        {/* Mobile Button */}
        <div
          role="presentation"
          onClick={() => setIsOpen(prev => !prev)}
          className="navbar__button"
        >
          {isOpen ? <CiMenuBurger /> : <IoMdClose />}
        </div>
      </div>

      {/* Mobile navbar */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list-mobile">
            <Link href="/stores" className="navbar__list--item--mobile">
              맛집 목록
            </Link>
            <Link href="/stores/new" className="navbar__list--item--mobile">
              맛집 등록
            </Link>
            <Link href="/users/likes" className="navbar__list--item--mobile">
              찜한 가게
            </Link>
            <Link href="/users/login" className="navbar__list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
