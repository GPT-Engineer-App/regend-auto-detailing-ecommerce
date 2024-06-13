import React from 'react';
import { LiveChatLoaderProvider } from 'react-live-chat-loader';
import { Box } from '@chakra-ui/react';

const LiveChat = () => {
  return (
    <LiveChatLoaderProvider provider="drift" providerKey="YOUR_DRIFT_KEY">
      <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
        <div id="drift-widget"></div>
      </Box>
    </LiveChatLoaderProvider>
  );
};

export default LiveChat;