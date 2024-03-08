import { Box } from '@mui/material';
import Table from '@components/Table/Table';
import { postedContentColumns } from '@utils/constants/tableColumns';
import { postedContentRows } from '@utils/constants/tableRows';
import styles from './PostedContent.module.scss';

const PostedContent = () => {
  return (
    <Box
      style={{ width: '100%', height: '100%' }}
      component="div"
      className={styles.postedContent}
    >
      <Table
        rows={postedContentRows}
        columns={postedContentColumns}
        customClass={styles.postedContent__table}
      />
    </Box>
  );
};

export default PostedContent;
