import { createSlice } from '@reduxjs/toolkit'

// import { fetchUserInfo } from '@/apis/user'
import { RootState, AppDispatch } from '@/store'
import { IUser } from '@/types/user'

export interface UserState {
	user: IUser
}

const initialState: UserState = {
	user: {
		name: 'username~',
		age: '0'
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		}
	}
})

const userReducer = userSlice.reducer
export const { setUser } = userSlice.actions
export const userSelector = (state: RootState): UserState => state.user
export default userReducer

// Actions
export const fetchUser =
	() =>
	async (dispatch: AppDispatch): Promise<void> => {
		// const data = await fetchUserInfo()
		// dispatch(setUser(data))
	}
