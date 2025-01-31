"use client";
import { useUser } from '@/lib/stores/user';
import { getUserData } from '@/utils/functions';
import { useEffect, useCallback } from 'react';

const SessionProvider = () => {
     useUser((state) => state.setUserData);



    return <> </>
}

export default SessionProvider