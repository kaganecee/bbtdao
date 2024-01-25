import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Voting from './pages/Voting'
import Proposal from './pages/Proposal'
import Layout from './components/Layout'
import PageWrapper from './pages/PageWrapper'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: '/proposal',
        element: (
            <Layout>
                <PageWrapper>
                    <Proposal />
                </PageWrapper>
            </Layout>
        ),
    },
    {
        path: '/voting',
        element: (
            <Layout>
                <PageWrapper>
                    <Voting />
                </PageWrapper>
            </Layout>
        ),
    },
])

export default router
