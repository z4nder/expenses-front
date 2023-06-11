<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full bg-primary-700">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div class="flex-shrink-0 flex items-center px-4">
                  <img
                    class="rounded-full mx-auto h-20 w-auto w-auto"
                    src="@/assets/img/onfly.svg"
                    alt="Workfow"
                  />
                </div>
                <nav class="mt-5 px-2 space-y-1">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    :class="[
                      'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </router-link>
                </nav>
              </div>
              <div class="flex-shrink-0 flex bg-primary-800 p-4">
                <a href="#" class="flex-shrink-0 group block">
                  <div class="flex flex-col">
                    <div class="flex">
                      <div>
                        <img
                          class="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-3">
                        <p class="text-base font-medium text-white">{{ userStore?.user?.name }}</p>
                      </div>
                    </div>
                    <div class="pt-2">
                      <v-button @click="logout"> Sair </v-button>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14"></div>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div class="flex-1 flex flex-col min-h-0 bg-primary-700">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <img
              class="rounded-full mx-auto h-20 w-auto w-auto"
              src="@/assets/img/onfly.svg"
              alt="Workfow"
            />
          </div>
          <nav class="mt-5 flex-1 px-2 space-y-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              :class="[
                'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-6 w-6'
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </router-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-primary-800 p-4">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex flex-row justify-between">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">{{ userStore?.user?.name }}</p>
              </div>
              <div>
                <v-button @click="logout"> Sair </v-button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-primary-700">
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars4Icon class="h-6 w-6 text-gray-100" aria-hidden="true" />
        </button>
      </div>
      <main class="bg-gray-100 h-screen min-h-full">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { WalletIcon, Bars4Icon, XMarkIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import useAuth from '../composables/useAuth'
import { useUserStore } from '../store/useUserStore'
const userStore = useUserStore()
const { logout } = useAuth()

const navigation = [
  {
    name: 'Home',
    href: { name: 'home' },
    icon: ChartBarIcon,
    current: true
  },
  {
    name: 'Despesas',
    href: { name: 'expense.index' },
    icon: WalletIcon,
    current: false
  }
]
const sidebarOpen = ref(false)
</script>
