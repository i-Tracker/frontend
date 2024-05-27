import { FilterProperty } from '@/features/filter/api/getFilterProperty';
import { Text } from '@/shared/components/shadcn/Text';
import { Label } from '@/shared/components/shadcn/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/shared/components/shadcn/ui/toggle-group';

export const FilterList = ({ property }: { property: FilterProperty }) => {
  console.log(property);
  return (
    <div className="flex flex-col items-start">
      <div>
        <Label className="pl-1">
          <Text typography="p" className="font-bold">
            화면크기
          </Text>
        </Label>
        <ToggleGroup variant="outline" type="single">
          {property.size?.map((size) => {
            return (
              <ToggleGroupItem disabled={false} key={size} value={`${size}`} aria-label="inch">
                <Text typography="small">{size}인치</Text>
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
      <div>
        <Label className="pl-1">
          <Text typography="p" className="font-bold">
            색상
          </Text>
        </Label>
        <ToggleGroup variant="outline" type="single" className="flex flex-wrap justify-start">
          {property.color?.map((color) => {
            return (
              <ToggleGroupItem disabled={false} key={color} value={`${color}`} aria-label="inch">
                <Text typography="small">{color}</Text>
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
      <div>
        <Label className="pl-1">
          <Text typography="p" className="font-bold">
            프로세서
          </Text>
        </Label>
        <ToggleGroup variant="outline" type="single" className="flex flex-wrap justify-start">
          {property.processor?.map((processor) => {
            return (
              <ToggleGroupItem disabled={false} key={processor} value={`${processor}`} aria-label="inch">
                <Text typography="small">{processor}</Text>
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
      <div>
        <Label className="pl-1">
          <Text typography="p" className="font-bold">
            저장장치
          </Text>
        </Label>
        <ToggleGroup variant="outline" type="single" className="flex flex-wrap justify-start">
          {property.storage?.map((storage) => {
            return (
              <ToggleGroupItem disabled={false} key={storage} value={`${storage}`} aria-label="inch">
                <Text typography="small">{storage}</Text>
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
      <div>
        <Label className="pl-1">
          <Text typography="p" className="font-bold">
            메모리
          </Text>
        </Label>
        <ToggleGroup variant="outline" type="single" className="flex flex-wrap justify-start">
          {property.memory?.map((memory) => {
            return (
              <ToggleGroupItem disabled={false} key={memory} value={`${memory}`} aria-label="inch">
                <Text typography="small">{memory}</Text>
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
    </div>
  );
};
