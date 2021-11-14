import { Button, HStack, List, ListIcon, ListItem, Stack, VStack } from '@chakra-ui/react'
import { useObserver } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import { useAppStore, useNestedStore } from '@core/stores'
import ObservableO from '@components/observable'


const UIAirdropItem = (props: { id: string }) => {
	const wallet = useNestedStore(s => s.wallet.wallets.find(e => e.id === props.id))
	return <ObservableO>
		<VStack>
			<p>{wallet?.id}</p>
			<p>{wallet?.title}</p>
		</VStack>
	</ObservableO>
}


export function SideBar() {
	const store = useNestedStore(s => s.wallet)
	return useObserver(() =>
		<List width="200px" backgroundColor={"grey.500"} spacing={3}>
			{store.wallets.map(e => <ListItem id={e.id}>
				<UIAirdropItem id={e.id} />
			</ListItem>)}
		</List>
	)
}
