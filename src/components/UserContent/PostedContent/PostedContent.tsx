import { Box } from '@mui/material';
import Table from '@components/Table/Table';
import { postedContentColumns } from '@utils/constants/tableColumns';
import styles from './PostedContent.module.scss';
import { useAppDispatch, useAppSelector } from '@services/typeHooks';
import { useEffect } from 'react';
import { getContent } from '@services/redux/slices/content/content';
import { logoutUser } from '@services/redux/slices/auth/auth';
import { RootState } from '@services/redux/store';
import { format } from 'date-fns';
import { IContent } from '@utils/types/contentTypes';

const transformContentsToRow = (content: IContent) => {
  return {
    id: content.id,
    link: content.link,
    date: format(new Date(content.date), 'dd.MM.yyyy'),
    guide_condition: content.guide_condition,
  };
};

const PostedContent = () => {
  const dispatch = useAppDispatch();
  const access = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    if (access.length !== 0) {
      dispatch(getContent({ access }));
    } else {
      dispatch(logoutUser({ access }));
    }
  }, [access, dispatch]);

  const content = useAppSelector(
    (state: RootState) => state.contents.contents
  );
  const contentRows = content.map(transformContentsToRow);

  return (
    <Box
      style={{ width: '100%', height: '100%' }}
      component="div"
      className={styles.postedContent}
    >
      <Table
        rows={contentRows}
        columns={postedContentColumns}
        customClass={styles.postedContent__table}
      />
    </Box>
  );
};

export default PostedContent;
