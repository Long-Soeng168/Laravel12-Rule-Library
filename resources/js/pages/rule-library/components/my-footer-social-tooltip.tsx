import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

export function MyFooterSocialTooltip({ items }: { any }) {
    return (
        <div className="mb-10 flex w-full flex-row items-center justify-center">
            <AnimatedTooltip items={items} />
        </div>
    );
}
