import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import ListView from '../Components/ListView';

export default function About() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            users
            <ListView/>
          </Typography>
          <Link href="/">Go to the main page</Link>
        </Box>
      </Container>
    </React.Fragment>
  );
}
