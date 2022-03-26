
import RcPagination, { PaginationProps } from 'rc-pagination';
import { ReactComponent as LeftArrow } from '../assets/icons/arrow-left.svg';
import { ReactComponent as RightArrow } from '../assets/icons/arrow-right.svg';
import 'rc-pagination/assets/index.css';
import './pagination.css';

const Pagination = ({...rest}: PaginationProps) => {
  return (
    <RcPagination {...rest} prevIcon={<LeftArrow />} nextIcon={<RightArrow />} />
  )
}

export default Pagination