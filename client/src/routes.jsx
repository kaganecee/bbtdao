import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Voting from './pages/Voting'
import Proposal from './pages/Proposal'
import PageWrapper from './pages/PageWrapper'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
                <Home />
        ),
    },
    {
        path: '/proposal',
        element: (
                <PageWrapper>
                    <Proposal />
                </PageWrapper>
        ),
    },
    {
        path: '/voting',
        element: (
                <PageWrapper>
                    <Voting />
                </PageWrapper>
        ),
    },
])

export default router
