import SnackbarMaterial from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useGlobalContext } from "context/GlobalContext";

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Snackbar = ({ type = "success" }) => {
  const gContext = useGlobalContext();

  return (
    <SnackbarMaterial
      open={gContext.openAlert}
      autoHideDuration={6000}
      onClose={() => gContext.toggleAlert(null)}
    >
      <Alert onClose={() => gContext.toggleAlert(null)} severity={type}>
        {gContext.dataAlert}
      </Alert>
    </SnackbarMaterial>
  );
};
