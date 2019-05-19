import React from 'react'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import HeaderDropdown from './HeaderDropdown'
import Account from './Account'
import AccountMenu from './AccountMenu'

export default function() {
  return (
    <div>
      <HeaderDropdown overlay={AccountMenu}>
        <Account />
      </HeaderDropdown>
    </div>
  )
}
