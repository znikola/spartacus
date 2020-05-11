import { LayoutConfig } from '../../../layout/config/layout-config';
import { DIALOG_TYPE } from '../../../layout/launch-dialog/index';
import { CloseAccountModalComponent } from './components/close-account-modal/close-account-modal.component';

export const defaultCloseAccountLayoutConfig: LayoutConfig = {
  launch: {
    CLOSE_ACCOUNT: {
      inline: true,
      component: CloseAccountModalComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};
