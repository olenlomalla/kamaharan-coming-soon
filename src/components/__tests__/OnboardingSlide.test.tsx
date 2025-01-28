import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import OnboardingSlide from "@/components/onboarding-slide";

describe("OnboardingSlide", () => {
  it("renders with correct props", () => {
    render(
      <OnboardingSlide
        title="Find your new favourite spots"
        description="From top-rated restaurants to trusted handymen, we've got London covered"
        currentStep={0}
        totalSteps={4}
      />
    );

    expect(
      screen.getByText("Find your new favourite spots")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "From top-rated restaurants to trusted handymen, we've got London covered"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /next|get started/i })
    ).toBeInTheDocument();
  });

  it("renders correct number of progress dots", () => {
    render(
      <OnboardingSlide
        title="Test Title"
        description="Test Description"
        currentStep={0}
        totalSteps={4}
      />
    );

    const dots = screen
      .getAllByRole("generic")
      .filter((element) =>
        element.className.includes("flex shrink-0 h-2 rounded")
      );
    expect(dots).toHaveLength(4);
  });

  it("calls onNext when next button is clicked", () => {
    const onNext = vi.fn();
    render(
      <OnboardingSlide
        title="Test Title"
        description="Test Description"
        currentStep={0}
        totalSteps={4}
        onNext={onNext}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(onNext).toHaveBeenCalled();
  });

  it("calls onSkip when skip button is clicked", () => {
    const onSkip = vi.fn();
    render(
      <OnboardingSlide
        title="Test Title"
        description="Test Description"
        currentStep={0}
        totalSteps={4}
        onSkip={onSkip}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /skip/i }));
    expect(onSkip).toHaveBeenCalled();
  });

  it('shows "Get Started" on last slide', () => {
    render(
      <OnboardingSlide
        title="Test Title"
        description="Test Description"
        currentStep={3}
        totalSteps={4}
      />
    );

    expect(
      screen.getByRole("button", { name: /get started/i })
    ).toBeInTheDocument();
  });
});
