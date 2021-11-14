import { Button, HStack, Stack, VStack } from '@chakra-ui/react'
import { useObserver } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import { Social } from '@models/social.model'
import _ from 'lodash'
import { useAppStore, useNestedStore } from '@core/stores'
import { useHistory } from 'react-router'

function HomeDetail() {
	const store = useNestedStore(s => s.wallet)
	const history = useHistory()

	const onClick = () => {
		store.create("a", "hello")
	}

	const goToSetting = () => {
		history.push("/settings")
	}

	return <VStack>
		<Button onClick={onClick}>
			Create
		</Button>

		<Button onClick={goToSetting}>
			Settings
		</Button>

		<Button onClick={onClick}>
			Create
		</Button>
	</VStack>
}

export default HomeDetail