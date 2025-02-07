import { Card, Stack, Typography, AspectRatio, ListItemContent} from '@mui/joy';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Quiz } from '../types/quiz.types';
import quizPlacheolder from '../../../assets/quiz_placeholder.png';
import { SxProps } from '@mui/material';

const QuizCard = ({ quiz, sx = [] }: {quiz: Quiz, sx?: SxProps}) => {
  const {title, duration, dueDate} = quiz;
  return (
    <Card
      variant="outlined"
      sx={[
        {
          mb: 2,
          width: 250,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'md', 
          }
        }, 
        ...(Array.isArray(sx) ? sx: [sx])
    ]}
    >
      <Stack spacing={2}>
        <AspectRatio>
          <img src={quizPlacheolder} alt={title}/>
        </AspectRatio>
        <ListItemContent>
          <Typography level="title-sm" noWrap>{title}</Typography>
        </ListItemContent>
        
        <Stack direction="row" spacing={2}>
          <Typography level="body-xs" startDecorator={<AccessTimeOutlinedIcon />}>
            {duration} mins
          </Typography>
          <Typography level="body-xs" startDecorator={<CalendarMonthOutlinedIcon />}>
            {new Date(dueDate).toLocaleDateString()}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default QuizCard;