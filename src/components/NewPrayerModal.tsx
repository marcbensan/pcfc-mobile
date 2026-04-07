import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import {
  Button,
  Checkbox,
  Modal,
  Portal,
  Text,
  TextInput,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, radius, spacing } from "../theme/Theme";
import {
  sanitizeText,
  validateName,
  validatePrayerContent,
} from "../utils/sanitize";

const MAX_CONTENT_LENGTH = 500;
const MAX_NAME_LENGTH = 50;

interface NewPrayerModalProps {
  visible: boolean;
  onDismiss: () => void;
  onSubmit: (content: string, author: string) => void;
}

const NewPrayerModal = ({
  visible,
  onDismiss,
  onSubmit,
}: NewPrayerModalProps) => {
  const [content, setContent] = useState("");
  const [shareName, setShareName] = useState(false);
  const [name, setName] = useState("");
  const [contentError, setContentError] = useState("");
  const [nameError, setNameError] = useState("");

  const resetForm = () => {
    setContent("");
    setShareName(false);
    setName("");
    setContentError("");
    setNameError("");
  };

  const handleDismiss = () => {
    Keyboard.dismiss();
    resetForm();
    onDismiss();
  };

  const handleSubmit = () => {
    const sanitizedContent = sanitizeText(content, MAX_CONTENT_LENGTH);
    const contentValidation = validatePrayerContent(sanitizedContent);

    if (!contentValidation.valid) {
      setContentError(contentValidation.error ?? "");
      return;
    }
    setContentError("");

    let author = "Anonymous";
    if (shareName) {
      const sanitizedName = sanitizeText(name, MAX_NAME_LENGTH);
      const nameValidation = validateName(sanitizedName);
      if (!nameValidation.valid) {
        setNameError(nameValidation.error ?? "");
        return;
      }
      setNameError("");
      author = sanitizedName;
    }

    onSubmit(sanitizedContent, author);
    resetForm();
  };

  const charCount = content.length;

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={handleDismiss}
        contentContainerStyle={styles.modal}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inner}>
            <View style={styles.iconHeader}>
              <View style={styles.iconWrapper}>
                <Icon name="hands-pray" size={26} color={colors.accentDark} />
              </View>
            </View>
            <Text style={styles.title}>New Prayer Request</Text>
            <Text style={styles.subtitle}>
              Share your prayer with the community
            </Text>

            <TextInput
              mode="outlined"
              placeholder="Write your prayer request..."
              placeholderTextColor={colors.textSecondary}
              value={content}
              onChangeText={(text) => {
                if (text.length <= MAX_CONTENT_LENGTH) {
                  setContent(text);
                  setContentError("");
                }
              }}
              multiline
              numberOfLines={5}
              style={styles.input}
              textColor={colors.text}
              outlineColor={contentError ? "#ff6b6b" : colors.divider}
              activeOutlineColor={contentError ? "#ff6b6b" : colors.accent}
              outlineStyle={{ borderRadius: radius.md }}
            />
            <View style={styles.charCountRow}>
              {contentError ? (
                <Text style={styles.error}>{contentError}</Text>
              ) : (
                <View />
              )}
              <Text
                style={[
                  styles.charCount,
                  charCount > MAX_CONTENT_LENGTH * 0.9 && { color: "#ff6b6b" },
                ]}
              >
                {charCount}/{MAX_CONTENT_LENGTH}
              </Text>
            </View>

            <View style={styles.checkboxRow}>
              <Checkbox
                status={shareName ? "checked" : "unchecked"}
                onPress={() => {
                  setShareName(!shareName);
                  if (shareName) {
                    setName("");
                    setNameError("");
                  }
                }}
                color={colors.accent}
                uncheckedColor={colors.textSecondary}
              />
              <Text style={styles.checkboxLabel}>Share my name (optional)</Text>
            </View>

            {shareName && (
              <TextInput
                mode="outlined"
                placeholder="Enter your name"
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={(text) => {
                  if (text.length <= MAX_NAME_LENGTH) {
                    setName(text);
                    setNameError("");
                  }
                }}
                style={styles.nameInput}
                textColor={colors.text}
                outlineColor={nameError ? "#ff6b6b" : colors.divider}
                activeOutlineColor={nameError ? "#ff6b6b" : colors.accent}
                outlineStyle={{ borderRadius: radius.md }}
              />
            )}
            {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

            <View style={styles.buttonRow}>
              <Button
                mode="outlined"
                onPress={handleDismiss}
                style={styles.cancelButton}
                labelStyle={styles.cancelLabel}
                contentStyle={styles.buttonContent}
              >
                Cancel
              </Button>
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.submitButton}
                labelStyle={styles.submitLabel}
                contentStyle={styles.buttonContent}
              >
                Post Prayer
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.surface,
    marginHorizontal: 24,
    borderRadius: radius.xl,
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  inner: {},
  iconHeader: {
    alignItems: "center",
    marginBottom: spacing.md,
    paddingTop: spacing.xs,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.xs,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.surfaceVariant,
    fontSize: 15,
    minHeight: 120,
    textAlignVertical: "top",
  },
  charCountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  charCount: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  error: {
    fontSize: 12,
    color: "#ff6b6b",
    fontWeight: "500",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "500",
  },
  nameInput: {
    backgroundColor: colors.surfaceVariant,
    fontSize: 15,
    marginBottom: spacing.xs,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  cancelButton: {
    borderColor: colors.divider,
    borderRadius: radius.xl,
  },
  cancelLabel: {
    color: colors.textSecondary,
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: colors.accent,
    borderRadius: radius.xl,
  },
  submitLabel: {
    color: colors.accentDark,
    fontWeight: "700",
  },
  buttonContent: {
    paddingVertical: 2,
  },
});

export default NewPrayerModal;
