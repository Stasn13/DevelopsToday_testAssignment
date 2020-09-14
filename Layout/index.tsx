import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Layout {
    children?: any;
}

const Header = styled.div`
    background: #000;
    min-height: 64px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    margin: 10px 0;
    color: #fff;
    cursor: pointer;
    transition: 0.1s;
`;

const Button = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    margin: 10px 0;
    font-size: 14px;
    text-transform: capitalize;
    color: #fff;
    padding: 10px 20px;
    box-sizing: border-box;
    font-weight: 300;
    height: 100%;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 8px;
    border: 1px solid #fff;
    text-align: center;
    white-space: pre;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
`;

const Wrapper = styled.div`
    height: 100vh;
`;

const Layout = (props: Layout) => {
    return (
        <Wrapper>
            <Header>
                <Link href="/">
                    <Logo>Blog App</Logo>
                </Link>
                <Link href="/posts/new">
                    <Button>+ Add New Post</Button>
                </Link>
            </Header>
            {props.children}
        </Wrapper>
    );
};

export default Layout;
