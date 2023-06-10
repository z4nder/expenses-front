import { ref, type Ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import dataFormat from '../plugins/dataFormat'

type Expense = {
  id: number
  value: number
  description: string
  formatted_value: string
  date: string
}

type StoreExpense = {
  value: number
  description: string
  date: string
}

const useExpense = () => {
  const errors = ref({})
  const router = useRouter()
  const expenses: Ref<Array<Expense>> = ref([])

  const index = async () => {
    try {
      const response = await axios.get('/expenses')
      expenses.value = response.data.data
    } catch (e: any) {
      console.log('Internal error', e)
    }
  }

  const store = async (params: StoreExpense) => {
    errors.value = {}

    try {
      await axios.post('/expenses', params)

      router.push({ name: 'expense.index' })
    } catch (e: any) {
      if (e.response?.status === 422) {
        errors.value = dataFormat.formatErrors(e.response.data.errors)
      }
    }
  }

  return {
    errors,
    index,
    store,
    expenses
  }
}

export default useExpense
