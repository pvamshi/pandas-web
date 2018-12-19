import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { ReactNode } from 'react';
import AppNavbar from './AppNavbar';
import { LayoutStore } from './layout.store';
import Sidebar from './Sidebar';

@inject('layoutStore')
@observer
export default class Layout extends React.Component<{
  layoutStore?: LayoutStore;
  children: ReactNode[];
}> {
  public render() {
    const { layoutStore, children } = this.props;
    return (
      <div>
        <AppNavbar toggle={layoutStore!.toggle} />
        {layoutStore!.open && <Sidebar elem={children[0]} />}
        <div className={layoutStore!.open ? 'main-open' : 'main'}>
          {children[1]}
        </div>
      </div>
    );
  }
}
