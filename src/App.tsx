import { useState } from "react";
import { PixelButton } from "./components/PixelButton/PixelButton";
import { PixelDialog } from "./components/PixelDialog";
import { PixelInput } from "./components/PixelInput/PixelInput";
import { PixelLabel } from "./components/PixelLabel/PixelLabel";
import { PixelListItem } from "./components/PixelListItem/PixelListItem";
import { PixelOrderedList } from "./components/PixelOrderedList/PixelOrderedList";
import { PixelTextArea } from "./components/PixelTextArea/PixelTextArea";
import { PixelUnorderedList } from "./components/PixelUnorderedList/PixelUnorderedList";
import { DialogClose, DialogFooter } from "./components/ui/dialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="p-8 flex flex-col gap-4 pixel-font bg-background">
      <p className="text-lg">Buttons</p>
      <hr className="border border-black" />
      <div className="gap-4 flex flex-wrap">
        <PixelButton>Button</PixelButton>
        <PixelButton variant="destructive">Destructive</PixelButton>
        <PixelButton variant="warning">Warning</PixelButton>
        <PixelButton variant="success">Success</PixelButton>
        <PixelButton variant="link">Link</PixelButton>
      </div>

      <p className="text-lg mt-5">Text area</p>
      <hr className="border border-black" />
      <PixelTextArea />

      <p>Unordered list</p>
      <hr className="border border-black" />
      <PixelUnorderedList>
        <PixelListItem>Item 1</PixelListItem>
        <PixelListItem>Item 2</PixelListItem>
        <PixelListItem>Item 3</PixelListItem>
        <PixelListItem bulletType="circle">Item 4</PixelListItem>
        <PixelListItem bulletType="circle">Item 5</PixelListItem>
        <PixelListItem bulletType="circle">Item 6</PixelListItem>
        <PixelListItem bulletType="square">Item 7</PixelListItem>
        <PixelListItem bulletType="square">Item 8</PixelListItem>
        <PixelListItem bulletType="square">Item 9</PixelListItem>
        <PixelListItem bulletType="none">Item 10</PixelListItem>
        <PixelListItem bulletType="none">Item 11</PixelListItem>
        <PixelListItem bulletType="none">Item 12</PixelListItem>
      </PixelUnorderedList>

      <p className="text-lg mt-5">Ordered list</p>
      <hr className="border border-black" />
      <PixelOrderedList>
        <PixelListItem>Item 1</PixelListItem>
        <PixelListItem>Item 2</PixelListItem>
        <PixelListItem>Item 3</PixelListItem>
      </PixelOrderedList>

      <p className="text-lg mt-5">Input</p>
      <hr className="border border-black" />
      <div className="flex gap-8 flex-col">
        <PixelInput className="p-2" placeholder="Pixel input" />
        <PixelInput
          className="p-2"
          placeholder="Pixel disabled input"
          disabled
        />
        <div>
          <PixelLabel htmlFor="pixel-input">With label</PixelLabel>
          <PixelInput
            className="p-2"
            placeholder="Pixel input"
            id="pixel-input"
          />
        </div>
        <div>
          <PixelLabel htmlFor="file">File input</PixelLabel>
          <PixelInput className="p-2" type="file" id="file" />
        </div>
        <div>
          <PixelLabel htmlFor="date">Date input</PixelLabel>
          <PixelInput className="p-2" type="date" id="date" />
        </div>
      </div>

      <PixelDialog
        trigger={<PixelButton className="w-fit">Open Dialog</PixelButton>}
        onOpenChange={setIsDialogOpen}
        open={isDialogOpen}
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg pixel-font">Dialog Content</p>
          <hr className="border border-black" />
          <PixelInput className="p-2" placeholder="Dialog input" />
          <PixelTextArea />
          <DialogFooter>
            <DialogClose asChild>
              <PixelButton>Cancel</PixelButton>
            </DialogClose>
            <PixelButton
              variant="success"
              type="submit"
              onClick={() => setIsDialogOpen(false)}
            >
              Save changes
            </PixelButton>
          </DialogFooter>
        </div>
      </PixelDialog>
    </div>
  );
}

export default App;
