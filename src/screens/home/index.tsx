import { SideBar } from './components/sidebar'
import React, { useState, useEffect } from 'react'
import { VStack, HStack, Flex } from '@chakra-ui/layout'
import { useNestedStore } from '../../core/stores'
import { Button } from '@chakra-ui/react'
import HomeDetail from './components/detail'

function HomePage() {
	return (
		<Flex>
			<SideBar />
			<HomeDetail />
		</Flex>
	)
}


export default HomePage