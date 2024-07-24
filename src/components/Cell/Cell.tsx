import React from 'react';
import { Cell as CellType } from 'types';
import bombUrl from 'assets/icons/bomb.webp';
import { StyledCell, StyledCore } from './styled';

type Props = {
    forceOpen: boolean
    isExploded: boolean
    onClick: (e: React.SyntheticEvent<HTMLDivElement>) => void
    onRightClick: (e: React.SyntheticEvent<HTMLDivElement>) => void
} & CellType

const areEqual = (prevProps: Props, nextProps: Props) => {
    return prevProps.forceOpen === nextProps.forceOpen
        && prevProps.open === nextProps.open
        && prevProps.id === nextProps.id
};
const Cell: React.FC<Props> = React.memo((props) => {
    const {
        open,
        isBoom,
        core,
        forceOpen,
        isExploded,
        onClick,
        onRightClick,
    } = props;

    const renderCore = () => {
        switch (true) {
            case isBoom:
                return <img src={bombUrl} width={16} height={16} />
            case core === 0:
                return null;
            default:
                return core
        }
    };

    const isOpen = forceOpen || open;
    return (
        <StyledCell $open={isOpen} $num={core} $isExploded={isExploded} onClick={onClick} onContextMenu={onRightClick}>
            <StyledCore $open={isOpen} $num={core}>{renderCore()}</StyledCore>
        </StyledCell>
    );
}, areEqual);

export default Cell;