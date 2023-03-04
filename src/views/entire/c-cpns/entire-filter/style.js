import styled from "styled-components";


export const FilterWrapper = styled.div`
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 80px; //头部也是固定定位，去掉头部高度

    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;

    .filter{
        display: flex;

        .item{
            margin: 0 4px 0 8px;
            padding: 6px 12px;
            border: 1px solid #dce0e0;
            border-radius: 4px;
            color: #484848;
            cursor: pointer;

            &.active {
                background-color: #008489;
                border: 1px solid #008489;
                color: #fff;
            }
        }
    }
`