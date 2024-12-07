import React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div>
      <Button variant="contained" startIcon={<SaveIcon />} color="primary">
        Save
      </Button>
    </div>
  );
}

export default App;
