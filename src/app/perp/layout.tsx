'use client';
import { Header } from '@/components/layouts/Header';
import { OrderlyConfigProviderRoot } from '@/provider/OrderlyConfigProviderRoot';
import Web3OnboardProviderRoot from '@/provider/WalletConnectProvider';
import { Box } from '@mui/material';
import React from 'react';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Web3OnboardProviderRoot>
				<OrderlyConfigProviderRoot>
					<Header />

					<Box p={2}>{children}</Box>
				</OrderlyConfigProviderRoot>
			</Web3OnboardProviderRoot>
		</main>
	);
}
