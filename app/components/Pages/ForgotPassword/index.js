import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import flow from 'lodash/flow';

import { startRememberPassWord } from 'store/user/actions';

import Typography from '@livipdev/core/Typography';
import Container from '@livipdev/core/Container';
import Box from '@livipdev/core/Box';
import Grid from '@livipdev/core/Grid';

import SimpleHeader from 'components/SimpleHeader';
import ForgotPasswordForm from 'components/ForgotPasswordForm';

import messages from './messages';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const onSubmit = flow(startRememberPassWord, dispatch);

  return (
    <Box component={Container} bgcolor="grey.background">
      <Box pt={4}>
        <SimpleHeader />
      </Box>
      <Box px={2} container justify="center" alignItems="center" component={Grid} height="calc(100vh - 75px)">
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" textAlign="center">
            <Typography variant="h3" gutterBottom>
              <FormattedMessage {...messages.title} />
            </Typography>
            <Typography variant="body2" gutterBottom>
              <FormattedMessage {...messages.subtitle} />
            </Typography>
            <ForgotPasswordForm onSubmit={onSubmit} />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
