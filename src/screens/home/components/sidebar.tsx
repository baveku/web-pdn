import { Button, HStack, List, ListIcon, ListItem, Stack, VStack } from '@chakra-ui/react'
import { observer, useObserver } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import { useAppStore, useNestedStore } from '@core/stores'
import Wallet from '@models/wallet.model'


const UIAirdropItem = (props: { wallet: Wallet }) => {
	return <VStack>
		<p>{props.wallet.id}</p>
		<p>{props.wallet.title}</p>
	</VStack>
}


export const SideBar = observer( (props) => {
	const store = useNestedStore(s => s.wallet)
	return <List width="200px" backgroundColor="grey.500" spacing={3}>
		{store.wallets.map(e => <ListItem id={e.id}>
			<UIAirdropItem wallet={e} />
		</ListItem>)}
	</List>
})
