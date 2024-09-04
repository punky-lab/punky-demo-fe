"use client";

import { Tab, Tabs } from "@nextui-org/react";
import Bag from './bag';

export default function SideBar() {
  return (
    <div className="h-full flex flex-col">
      <Tabs aria-label="toggle">
        <Tab key="chat" title="Chat" className="grow flex">
          <div className="grow bg-gray-800 rounded-xl p-4">
            <span>Chat</span>
          </div>
        </Tab>
        <Tab key="bag" title="Bag" className="grow flex">
          <div className="grow bg-gray-800 rounded-xl p-4 max-h-96 overflow-y-auto">
            <Bag />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
